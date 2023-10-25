import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <div className={styles.logo}>
                        <Image
                            src="/snorlax.png"
                            alt="logo"
                            width={50}
                            height={50}
                        />
                        <h1 className={styles.logoText}>Howen</h1>
                    </div>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dicta facilis consequatur unde libero ea sequi
                        doloremque beatae! Quia perspiciatis sapiente suscipit
                        facere, minima porro at, nostrum maiores odio
                        perferendis reiciendis.
                    </p>
                    <div className={styles.icons}>
                        <Image
                            src="/facebook.png"
                            alt=""
                            width={18}
                            height={18}
                        />
                        <Image
                            src="/instagram.png"
                            alt=""
                            width={18}
                            height={18}
                        />
                        <Image
                            src="/tiktok.png"
                            alt=""
                            width={18}
                            height={18}
                        />
                        <Image
                            src="/youtube.png"
                            alt=""
                            width={18}
                            height={18}
                        />
                    </div>
                </div>
                <div className={styles.links}>
                    <div className={styles.list}>
                        <span className={styles.listTitle}>Links</span>
                        <span href="/">Home</span>
                        <span href="/">Blog</span>
                        <span href="/">About</span>
                        <span href="/">Contact</span>
                    </div>
                    <div className={styles.list}>
                        <span className={styles.listTitle}>Tags</span>
                        <span href="/">Style</span>
                        <span href="/">Fashion</span>
                        <span href="/">Food</span>
                        <span href="/">Coding</span>
                    </div>
                    <div className={styles.list}>
                        <span className={styles.listTitle}>Social</span>
                        <span href="/">Facebook</span>
                        <span href="/">Instagram</span>
                        <span href="/">Tiktok</span>
                        <span href="/">Youtube</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
