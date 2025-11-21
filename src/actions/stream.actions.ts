"use server"

import {currentUser} from "@clerk/nextjs/server";
import {StreamClient} from "@stream-io/node-sdk";

export const streamTokenProvider = async () => {
    const user = await currentUser()

    if (!user) throw new Error("User not authenticated")

    const streamClient = new StreamClient(
        process.env.NEXT_PUBLIC_STREAM_API_KEY!,
        process.env.STREAM_SECRET_KEY!
    );

    // Explicitly set iat to current time to prevent clock skew issues
    const now = Math.floor(Date.now() / 1000); // Current time in seconds since epoch
    const token = streamClient.generateUserToken({
        user_id: user.id,
        iat: now - 60, // Subtract 60 seconds to account for any potential clock skew
    });

    return token
}