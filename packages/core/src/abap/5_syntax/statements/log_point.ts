import * as Expressions from "../../2_statements/expressions";
import {StatementNode} from "../../nodes";
import {CurrentScope} from "../_current_scope";
import {Source} from "../expressions/source";

export class LogPoint {
  public runSyntax(node: StatementNode, scope: CurrentScope, filename: string): void {
    // just recurse
    for (const s of node.findDirectExpressions(Expressions.Source)) {
      new Source().runSyntax(s, scope, filename);
    }
  }
}