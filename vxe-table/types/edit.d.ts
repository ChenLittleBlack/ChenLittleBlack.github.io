import { VXEComponent, RecordInfo } from './component'
import { VxeTableDefines } from './table'

/**
 * 表格扩展 - 编辑
 */
export const Edit: VXEComponent<{}>;

export interface TableEditMethods {
  /**
   * 往表格插入临时数据，从第一行新增一行或多行新数据
   * @param records 新数据
   */
  insert(records: RecordInfo | RecordInfo[]): Promise<{ row: any, rows: any[] }>;
  /**
   * 往表格插入临时数据，从指定位置插入一行或多行；第二个参数：row 指定位置、null从第一行插入、-1 从最后插入
   * @param records 新数据
   * @param row 指定行
   */
  insertAt(records: RecordInfo | RecordInfo[], row: any | -1 | null): Promise<{ row: any, rows: any[] }>;
  /**
   * 删除指定行数据，指定 row 或 [row, ...] 删除多条数据，如果为空则删除所有数据
   * @param rows 指定行
   */
  remove(rows?: any | any[]): Promise<{ row: any, rows: any[] }>;
  /**
   * 删除复选框选中的行数据
   */
  removeCheckboxRow(): Promise<{ row: any, rows: any[] }>;
  /**
   * 删除单选框选中的行数据
   */
  removeRadioRow(): Promise<{ row: any, rows: any[] }>;
  /**
   * 删除当前行选中的行数据
   */
  removeCurrentRow(): Promise<{ row: any, rows: any[] }>;
  /**
   * 获取表格数据集
   * 获取新增、删除、更改的数据
   */
  getRecordset(): {
    insertRecords: any[];
    removeRecords: any[];
    updateRecords: any[];
  };
  /**
   * 用于 edit-config，获取新增的临时数据
   */
  getInsertRecords(): any[];
  /**
   * 获取已删除的数据
   */
  getRemoveRecords(): any[];
  /**
   * 用于 edit-config，获取已修改的数据
   */
  getUpdateRecords(): any[];
  /**
   * 用于 edit-config，获取已激活的行数据
   */
  getActiveRecord(): {
    row: any;
    rowIndex: number;
    $rowIndex: number;
    column: VxeTableDefines.ColumnInfo;
    columnIndex: number;
    $columnIndex: number;
    cell: HTMLElement;
  };
  /**
   * 用于 mouse-config.selected，获取选中的单元格信息
   */
  getSelectedCell(): {
    row: any;
    column: VxeTableDefines.ColumnInfo;
  };
  /**
   * 手动清除单元格激活状态
   */
  clearActived(evnt?: Event): Promise<any>;
  /**
   * 手动清除单元格选中状态
   */
  clearSelected(): Promise<any>;
  /**
   * 用于 edit-config，判断行是否为激活编辑状态
   * @param row 指定行
   */
  isActiveByRow(row: any): boolean;
  /**
   * 用于 edit-config，激活行编辑并激活第一个单元格
   * @param row 指定行
   */
  setActiveRow(row: any): Promise<any>;
  /**
   * 用于 edit-config，激活单元格编辑
   * @param row 指定行
   * @param field 字段名
   */
  setActiveCell(row: any, fieldOrColumn: string | VxeTableDefines.ColumnInfo): Promise<any>;
  /**
   * 用于 mouse-config.mouse-config，选中某个单元格
   * @param row 指定行
   * @param field 字段名
   */
  setSelectCell(row: any, fieldOrColumn: string | VxeTableDefines.ColumnInfo): Promise<any>;
}

export interface TableEditPrivateMethods {
  handleActived(params: any, evnt?: any): Promise<any>;
  handleFocus(params: any, evnt?: any): void;
  handleSelected(params: any, evnt: any): Promise<any>;
  addCellSelectedClass(): void;
}

declare module './grid' {
  interface VxeGridMethods extends TableEditMethods { }
}

declare module './table' {
  interface VxeTableMethods extends TableEditMethods { }
  interface VxeTablePrivateMethods extends TableEditPrivateMethods { }
}
