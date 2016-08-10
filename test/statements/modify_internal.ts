import {statementType} from "../utils";
import * as Statements from "../../src/statements/";

let tests = [
  "MODIFY SCREEN.",
  "modify lt_table index sy-index from item.",
  "MODIFY lt_table INDEX SY-TABIX.",
  "modify lt_table.",
  "MODIFY gt_alv FROM ls_alv INDEX ls_rows-index.",
  "MODIFY ct_col INDEX sy-tabix FROM ls_col TRANSPORTING field.",
];

statementType(tests, "MODIFY internal", Statements.ModifyInternal);