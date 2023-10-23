import React from "react";
import Link from "next/link";
import styles from "./authLinks.module.css";

export const AuthLinks = () => {
    // temporary
    const status = "notauthenticated"
    return <>
    {status==="notauthenticated" ? (
        <Link href="/login">Login</Link>
    ) : (
        <>
        <Link href="/write">Write</Link>
        <span className={styles.link}>Logout</span>
        </>
    )}
    </>
};

export default AuthLinks;
