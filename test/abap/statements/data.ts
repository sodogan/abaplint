import {statementType} from "../_utils";
import * as Statements from "../../../src/abap/statements/";

const tests = [
  "DATA lv_foo TYPE i.",
  "DATA lv_foo LIKE LINE OF foo.",
  "DATA lv_foo LIKE lv_foo.",
  "DATA lv_foo TYPE REF TO cl_foobar.",
  "DATA lv_foo TYPE TABLE OF i.",
  "DATA lv_foo TYPE zcl_class=>typedef.",
  "DATA lv_foo LIKE sy-tabix.",
  "data foo type ref to ZCL_FOOBAR.",
  "data foo type ref to ZCL_FOOBAR .",
  "data lt_foo LIKE STANDARD TABLE OF ld_font_family.",
  "data lt_data type table of d020s with header line.",
  "DATA sdf TYPE c ##NEEDED.",
  "Data foo(89) type c.",
  "data foo type char100.",
  "data foo100 type c length 100.",
  "DATA lv_int TYPE c LENGTH c_length.",
  "data char.",
  "data char(100).",
  "data sdf type table of ref to zcl_foobar.",
  "data range type range of string.",
  "data lt_foo type table of bar initial size 0.",
  "data foo    type  i value -1.",
  "data foobar type abap_bool read-only value ABAP_FALSE ##NO_TEXT.",
  "data item(4) value '  # '.",
  "DATA ls_field_cat_comp  LIKE LINE OF <ls_object_table>-field_catalog.",
  "DATA lt_ucomm TYPE TABLE OF sy-ucomm.",
  "DATA tab LIKE foobar OCCURS 0 WITH HEADER LINE.",
  "DATA tab LIKE foobar OCCURS 0.",
  "DATA tab TYPE foobar OCCURS 0 WITH HEADER LINE.",
  "DATA mt_stage TYPE SORTED TABLE OF ty_stage WITH UNIQUE KEY file-path file-filename.",
  "data foo like bar[].",
  "DATA lt_list TYPE ddictype WITH HEADER LINE.",
  "DATA ret TYPE TABLE OF bapiret2 WITH HEADER LINE.",
  "data mt_field TYPE TABLE OF ty_view_field " +
    "WITH NON-UNIQUE SORTED KEY view_fieldname COMPONENTS view_fieldname " +
    "WITH NON-UNIQUE SORTED KEY no_case COMPONENTS no_case.",
  "DATA %id TYPE flag.",
  "DATA /foo/bar TYPE /foo/bar.",
  "DATA lr_/foo/cx_bar TYPE REF TO /foo/bar.",
  "DATA li_data(200) TYPE c OCCURS 0 WITH HEADER LINE.",
  "DATA lr_range type range of type WITH HEADER LINE.",
  "data $field type c.",
  "data $fie$ld type c.",
  "data lt_foo type standard table of snodetext initial size 0 with header line.",
  "DATA ret TYPE TABLE OF foobar INITIAL SIZE 10 WITH HEADER LINE.",
  "data foo type p decimals 0 length 4.",
  "DATA foo1 TYPE c LENGTH 1 VALUE 'A' READ-ONLY.",
  "DATA foo2 TYPE c READ-ONLY LENGTH 1 VALUE 'A'.",
  "DATA foo3 TYPE c VALUE 'A' LENGTH 1 READ-ONLY.",
  "DATA foo4 LENGTH 1 VALUE 'A' READ-ONLY TYPE c.",
  "DATA foo5 READ-ONLY LENGTH 1 VALUE 'A' TYPE c.",
  "DATA foo6 VALUE 'A' LENGTH 1 READ-ONLY TYPE c.",
  "DATA foo7(1) VALUE 'A' READ-ONLY TYPE c.",
  "DATA foo8(1) TYPE c VALUE 'A' READ-ONLY.",
  "DATA foo9(1) READ-ONLY VALUE 'A' TYPE c.",
  "DATA foo10(1) TYPE c READ-ONLY VALUE 'A'.",
  "DATA foo11 TYPE p DECIMALS 2.",
  "DATA foo12 DECIMALS 2 TYPE p.",
  "DATA foo13 LENGTH 5 TYPE p DECIMALS 2.",
  "DATA foo14 DECIMALS 2 TYPE p LENGTH 5.",
  "DATA foo15 TYPE p DECIMALS 2 VALUE 1.",
  "DATA foo16 DECIMALS 2 TYPE p VALUE 1.",
  "DATA foo17 VALUE 1 LENGTH 5 TYPE p DECIMALS 2.",
  "DATA foo18 VALUE 1 DECIMALS 2 TYPE p LENGTH 5.",
  "DATA *foo.",
  "DATA bar*.",
  "DATA moo*boo.",
  "DATA gt_data TYPE REF TO something OCCURS 0 WITH HEADER LINE.",
  "DATA ls_foo TYPE t_/moo/boo.",
  "DATA ls_/moo/boo TYPE t_bar.",
  "DATA ls_/moo/boo TYPE t_/moo/boo.",
  "DATA ls_/moo/boo TYPE STANDARD TABLE OF t_/moo/boo.",
  "DATA gt_tab TYPE HASHED TABLE OF f_cut->type WITH UNIQUE KEY name1 name2.",

// todo
//  "DATA lt_tab OCCURS 10.",
//  "DATA range TYPE RANGE OF char30 WITH HEADER LINE.",
//  "data mepo1313-evers like ekpo-evers.",
];

statementType(tests, "DATA", Statements.Data);