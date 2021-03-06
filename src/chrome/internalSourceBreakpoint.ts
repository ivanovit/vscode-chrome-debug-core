/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import { DebugProtocol } from 'vscode-debugprotocol';
import { logpointExpressionToConsoleLog } from './consoleHelper';

export class InternalSourceBreakpoint {
    readonly line: number;
    readonly column?: number;
    readonly condition?: string;
    readonly hitCondition?: string;

    constructor(breakpoint: DebugProtocol.SourceBreakpoint) {
        this.line = breakpoint.line;
        this.column = breakpoint.column;
        this.hitCondition = breakpoint.hitCondition;

        if (breakpoint.logMessage) {
            this.condition = logpointExpressionToConsoleLog(breakpoint.logMessage);
            if (breakpoint.condition) {
                this.condition = `(${breakpoint.condition}) && ${this.condition}`;
            }
        } else if (breakpoint.condition) {
            this.condition = breakpoint.condition;
        }
    }
}
