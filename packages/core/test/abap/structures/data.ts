import {structureType} from "../_utils";
import {Data} from "../../../src/abap/3_structures/structures";

const cases = [
  {abap: "DATA: BEGIN OF name, foo TYPE string, bar TYPE string, END OF name."},

  {abap: `
  DATA: BEGIN OF COMMON PART sddfs.
  DATA: foo TYPE c LENGTH 1.
  ENHANCEMENT-POINT sdf SPOTS sdfsdf STATIC INCLUDE BOUND.
  DATA: END OF COMMON PART.`},

  {abap: `
  DATA: BEGIN OF COMMON PART something.
  TYPE-POOLS zfsd.
  DATA: END OF COMMON PART something.`},

  {abap: `
  DATA: BEGIN OF COMMON PART asdf.
  ENHANCEMENT 1  sdfsd.
  ENDENHANCEMENT.
  DATA: END OF COMMON PART.`},

  {abap: `
  DATA: BEGIN OF COMMON PART something.
  CONSTANTS foo TYPE c LENGTH 1 VALUE 'A'.
  DATA: END   OF COMMON PART something.`},

  {abap: `
  DATA: BEGIN OF COMMON PART something.
  TYPES: foo TYPE c LENGTH 1.
  DATA: END   OF COMMON PART something.`},

  {abap: `
  DATA BEGIN OF COMMON PART commonpart.
  TYPES:
        BEGIN OF typea,
          bar TYPE c,
        END OF typea.
  DATA END OF COMMON PART.`},

  {abap: `
  DATA BEGIN OF COMMON PART part123.
  INCLUDE zsomething.
  DATA END OF COMMON PART.`},

  {abap: `
  DATA BEGIN OF COMMON PART part123.
  RANGES range FOR foo-bar.
  DATA END OF COMMON PART.`},

  {abap: `
  DATA BEGIN OF COMMON PART part123.
  DEFINE foobar.
  END-OF-DEFINITION.
  DATA END OF COMMON PART.`},

  {abap: `
  DATA BEGIN OF bar.
  DATA foo TYPE c.
  DATA END OF bar VALID BETWEEN foo AND foo.`},

];

structureType(cases, new Data());