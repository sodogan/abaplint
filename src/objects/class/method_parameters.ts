import {StatementNode} from "../../abap/nodes/statement_node";
import {MethodDef} from "../../abap/statements/method_def";
import {MethodParameter} from "./method_parameter";
import {MethodDefImporting, MethodParam, MethodDefExporting, MethodDefChanging} from "../../abap/expressions";
import {ExpressionNode}  from "../../abap/nodes";

export class MethodParameters {
  private importing: MethodParameter[];
  private exporting: MethodParameter[];
  private changing: MethodParameter[];
  private returning: MethodParameter;
  private exceptions: string[];

  constructor(node: StatementNode) {
    if (!(node.get() instanceof MethodDef)) {
      throw new Error("MethodDefinition, expected MethodDef as part of input node");
    }

    this.importing = [];
    this.exporting = [];
    this.changing = [];
    this.returning = undefined;
    this.exceptions = [];

    this.parse(node);
  }

  public getImporting() {
    return this.importing;
  }

  public getExporting() {
    return this.exporting;
  }

  public getChanging() {
    return this.changing;
  }

  public getReturning() {
    return this.returning;
  }

  public getExceptions() {
    return this.exceptions;
  }

  private parse(node: StatementNode): void {

    let importing = node.findFirstExpression(MethodDefImporting);
    if (importing) {
      this.add(this.importing, importing);
    }

    let exporting = node.findFirstExpression(MethodDefExporting);
    if (exporting) {
      this.add(this.exporting, exporting);
    }

    let changing = node.findFirstExpression(MethodDefChanging);
    if (changing) {
      this.add(this.changing, changing);
    }

// todo:
// this.returning = undefined;

// todo:
// this.exceptions = [];
// also consider RAISING vs EXCEPTIONS
  }

  private add(target: MethodParameter[], source: ExpressionNode): void {
    let params = source.findAllExpressions(MethodParam);
    for (let param of params) {
      target.push(new MethodParameter(param));
    }
  }

}