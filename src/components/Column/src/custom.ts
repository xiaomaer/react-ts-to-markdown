interface Point {
    x: number;
    y: number;
}
type keys = keyof Point;


interface CustomProps {
    /**
     * 设置a
     */
    a: string;
    /**
    * 设置b
    */
    b: number;
    /**
    * 设置c
    */
    c: boolean;
    /**
    * 设置d
    * @default "x"
    */
    d: keys;
    /**
    * 设置e
    */
    e: Point;
    /** 设置test属性 */
    test: string[];
    /** 我是一个方法 */
    method: (arr: string[]) => void;
}


type PickCustomProps = Partial<CustomProps>
export type OmitCustomProps = Omit<PickCustomProps, 'a'>