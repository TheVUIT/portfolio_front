import {useToast} from "../../hooks/use-toast"
import {
    Toast,
    ToastClose,
    ToastDescription,
    ToastProvider,
    ToastTitle,
    ToastViewport,
} from "src/components/ui/toast"

export function Toaster() {
    const {toasts} = useToast()

    return (
        <ToastProvider>
            {toasts.map(function ({id, title, description, action, ...props}) {
                return (
                    <Toast
                        key={id}
                        {...props}
                        className="flex items-center p-4 mb-4 w-full max-w-xs text-gray-900 bg-white
                        border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-100
                        dark:border-gray-700"
                    >
                        <div className="grid gap-1 flex-1">
                            {title && (
                                <ToastTitle className="text-lg font-semibold text-green-600 dark:text-blue-400">
                                    {title}
                                </ToastTitle>
                            )}
                            {description && (
                                <ToastDescription className="font-ubuntu text-sm text-gray-600 dark:text-gray-300">
                                    {description}
                                </ToastDescription>
                            )}
                        </div>
                        {action && <div className="ml-4">{action}</div>}
                        <ToastClose
                            className="ml-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
                            ✖
                        </ToastClose>
                    </Toast>
                );
            })}
            <ToastViewport className="fixed bottom-4 right-4 flex flex-col gap-4"/>
        </ToastProvider>

    );
}
