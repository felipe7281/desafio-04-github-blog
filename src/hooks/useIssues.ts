import { useContext } from "react";
import { IssuesContext } from "../context/IssuesContext";

export function useIssues() {
    const context = useContext(IssuesContext)
    return context;
}