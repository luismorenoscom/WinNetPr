import * as React from "react";
import { ToastActionElement, type ToastProps } from "./toast";
type ToasterToast = ToastProps & {
    id: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    action?: ToastActionElement;
};
declare const actionTypes: {
    readonly ADD_TOAST: "ADD_TOAST";
    readonly UPDATE_TOAST: "UPDATE_TOAST";
    readonly DISMISS_TOAST: "DISMISS_TOAST";
    readonly REMOVE_TOAST: "REMOVE_TOAST";
};
type Action = {
    type: "ADD_TOAST";
    toast: ToasterToast;
} | {
    type: "UPDATE_TOAST";
    toast: Partial<ToasterToast>;
} | {
    type: "DISMISS_TOAST";
    toastId?: string;
} | {
    type: "REMOVE_TOAST";
    toastId: string;
};
declare function reducer(state: ToasterToast[], action: Action): ToasterToast[];
declare function useToast(): {
    toasts: ToasterToast[];
    toast: ({ ...props }: ToastProps) => {
        id: string;
        dismiss: () => void;
        update: (props: ToasterToast) => void;
    };
    dismiss: (toastId?: string) => void;
};
export { useToast, reducer, actionTypes, type ToasterToast };
