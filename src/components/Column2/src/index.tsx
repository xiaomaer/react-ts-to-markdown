import React from "react";
import { IColumnProps } from './interface'

/**
 * Form column.
 */
export function Column2(props: IColumnProps) {
  return <div>{props.name || ''}</div>;
}
