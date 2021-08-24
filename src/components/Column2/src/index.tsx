import React from "react";
import * as Type from './interface'

/**
 * Form column.
 */
export function Column(props: Type.IColumnProps) {
  return <div>{props.name || ''}</div>;
}


/**
 * Form column.
 */
export function Column1(props: Type.IColumnProps2) {
  return <div>{props.name || ''}</div>;
}

/**
 * Form column.
 */
export function Column2(props: Type.IColumnProps3) {
  return <div>{props.name || ''}</div>;
}