import React from 'react';
import {HeadingLevel} from "@repo/ui/src/types";
import styles from './styles/Headline.module.scss'

interface HeadlineProps {
    headingLevel: HeadingLevel;
    children: React.ReactNode; // Can contain any renderable content
}

export const Headline = (
    {
        headingLevel,
        children
    }:HeadlineProps
)=>{
    const Tag = headingLevel;

    return(
        <div className={styles["header"]}>
            <Tag className={styles["header__text"]}>
                {children}
            </Tag>
        </div>
    );
}