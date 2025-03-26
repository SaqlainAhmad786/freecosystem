function Dashboard() {
    return (
        <>
            <div className="h-screen">
                <div className="grid gap-4 lg:gap-8 md:grid-cols-3 p-8">
                    <div className="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
                        <div className="space-y-2">
                            <div
                                className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
                                <span>Total Ads Live</span>
                            </div>

                            <div className="text-3xl dark:text-gray-100">
                                1500
                            </div>

                            <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-green-600">

                                <span>Increase</span>

                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
                        <div className="space-y-2">
                            <div
                                className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
                                <span>Total Ads waiting for approval</span>
                            </div>

                            <div className="text-3xl dark:text-gray-100">
                                100
                            </div>

                            <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-red-600">

                                <span>Decrease</span>

                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                        </div>

                    </div>
                    <div className="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
                        <div className="space-y-2">
                            <div
                                className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">

                                <span>Total Active Users</span>
                            </div>

                            <div className="text-3xl dark:text-gray-100">
                                500
                            </div>

                            <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-green-600">

                                <span>Increase</span>

                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
                        <div className="space-y-2">
                            <div
                                className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
                                <span>Total Users Deactivated</span>
                            </div>

                            <div className="text-3xl dark:text-gray-100">
                                100
                            </div>

                            <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-green-600">

                                <span>32k increase</span>

                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
                        <div className="space-y-2">
                            <div
                                className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
                                <span>Total Ads Rejected</span>
                            </div>

                            <div className="text-3xl dark:text-gray-100">
                                50
                            </div>

                            <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-red-600">

                                <span>decrease</span>

                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
