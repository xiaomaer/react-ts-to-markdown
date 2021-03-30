import React from "react";
import { IColumnProps } from './interface'

/**
 * Form column.
 */
export function Column(props: IColumnProps) {
  return <div>{props.name || ''}</div>;
}
