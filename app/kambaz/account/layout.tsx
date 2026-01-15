import { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({ children }:
    Readonly<{ children: ReactNode }>) {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td valign="top" width="100px">
                            <AccountNavigation />
                        </td>
                        <td valign="top">{children}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );}