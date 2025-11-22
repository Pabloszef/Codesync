"use client"

import {useRouter} from "next/navigation";
import {useUserRole} from "@/hooks/useUserRole";
import LoaderUI from "@/components/LoaderUI";
import InterviewScheduleUI from "@/app/(root)/schedule/InterviewScheduleUI";

function SchedulePage() {
    const router = useRouter()

    const { isInterviewer, isLoading } = useUserRole()

    if (isLoading) return <LoaderUI />
    if (!isInterviewer) return router.push("/")
    return (
        <InterviewScheduleUI />
    )
}

export default SchedulePage

