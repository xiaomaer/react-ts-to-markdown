/**
 * Column properties.
 */
export interface IColumnProps {
    /**
     * 设置名称
     * @default "red"
     */
    name?: string;
    /** 设置性别 */
    sex: number;
    /**
     * 获取年龄
     */
    getAge: () => number;
    /** 设置分类
     * @default "option1"
     */
    category: "option1" | "option2" | "option3";
}

/**
 * Column properties.
 */
export interface IColumnProps2 {
    /**
     * 设置名称
     * @default "red"
     */
    name?: string;
    /** 设置性别 */
    sex: number;
    /**
     * 获取年龄
     */
    getAge: () => number;
    /** 设置分类
     * @default "option1"
     */
    category: "option1" | "option2" | "option3";
}

/**
 * Column properties.
 */
export type IColumnProps3 = {
    /**
     * 设置名称
     * @default "red"
     */
    name?: string;
    /** 设置性别 */
    sex: number;
    /**
     * 获取年龄
     */
    getAge: () => number;
    /** 设置分类
     * @default "option1"
     */
    category: "option1" | "option2" | "option3";
}