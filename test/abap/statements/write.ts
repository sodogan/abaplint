import {statementType} from "../_utils";
import * as Statements from "../../../src/abap/statements/";

const tests = [
  "WRITE 'foobar'.",
  "WRITE / 'hello'.",
  "WRITE lv_row TO lv_char.",
  "write lc_val to lv_time USING EDIT MASK '__:__:__'.",
  "WRITE lv_flag AS CHECKBOX INPUT OFF NO-GAP.",
  "WRITE lv_value TO lv_value_c EXPONENT 0 NO-GROUPING NO-SIGN.",
  "WRITE pv_qty UNIT pv_uom TO lv_text1.",
  "write <item> to lv_value no-grouping no-sign decimals 10.",
  "WRITE AT /10 'sdf'.",
  "write coltext to header_text(4) as icon left-justified.",
  "write lv_foo no-gap.",
  "WRITE 'Hello' COLOR 6.",
  "write /(100) 'foobar'.",
  "WRITE foo COLOR lv_color INTENSIFIED.",
  "write mark as checkbox.",
  "WRITE foo INPUT ON.",
  "write line_horizontal_line as line no-gap.",
  "write sym_minus_box as symbol no-gap.",
  "write /(100) 'foobar' color = 4.",
  "write l_intern_date to l_extern_date mm/dd/yyyy.",
  "write at 52 'sdf' color = 2 inverse.",
  "write lv_int_value to lv_ext_value exponent lv_exponent.",
  "WRITE AT 10 'sdf'.",
  "WRITE 25 'hello'.",
  "WRITE (4) lv_var NO-GAP.",
  "WRITE /.",
  "write l_x right-justified to ls_dump.",
  "WRITE space COLOR lv_col INTENSIFIED OFF.",
  "write lv_val to lv_res currency lv_cur round lv_round no-sign no-zero.",
  "WRITE lv_date DD/MM/YYYY.",
  "WRITE lv_time ENVIRONMENT TIME FORMAT.",
  "write / lv_ts time zone sy-zonlo.",
  "write icon_message_error as icon hotspot.",
  "write / lv_foo under text-001.",
  "write 60(1) sy-vline.",
  "write /3(50) sdf.",
  "write at /(20) wa_str-name.",
  "WRITE 'hello' HOTSPOT COLOR 5 INVERSE ON.",
  "write 2(50) text-003 color col intensified on.",
  "WRITE AT (len) fill COLOR lv_col.",
  "write lv_val to lv_ext style lv_style no-zero no-sign.",
  "WRITE / lv_bar INPUT.",
  "WRITE icon_tools AS ICON HOTSPOT ON COLOR COL_NORMAL.",
  "write val to text(len) using no edit mask.",
  "WRITE AT (lv_at) lv_name COLOR COL_HEADING QUICKINFO lv_info.",
  "WRITE 1(4) 'FOO' CENTERED.",
  "WRITE ('CL_FOO=>BAR') TO lv_value.",
  "WRITE AT 125(6) foo-bar COLOR COL_POSITIVE CENTERED.",
  "WRITE / 'bar' INTENSIFIED.",
  "write at GI_GEN_H_MSG-HOTSPOT_COL ICON_REPLACE as icon.",
  "WRITE value CURRENCY cur TO s.",
  "WRITE AT (length) lv_text COLOR = var1 INTENSIFIED = var2 HOTSPOT = var3.",
  "WRITE (16) foo COLOR = r INVERSE = i.",
  "WRITE 'sdf' TO table INDEX index.",
  "WRITE AT pos(length) symbol AS SYMBOL NO-GAP.",
  "WRITE AT lv_pos(4) lv_icon AS ICON.",
  "WRITE AT / moo.",
  "WRITE AT /20 moo.",
  "write (*) l_line2.",
  "WRITE AT /pos foo.",
  "WRITE AT <baubles_memory>-position_x(1) 'hello'.",
  "WRITE AT ls_output-field(ls_len-outputlen) <l_fs> NO-GAP.",
  "WRITE AT lv_position_x(1) 'o' COLOR COL_TOTAL INTENSIFIED ON INVERSE OFF FRAMES OFF.",
];

statementType(tests, "WRITE", Statements.Write);