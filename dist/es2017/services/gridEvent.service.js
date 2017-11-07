export class GridEventService {
    /* OnMouseHover (Enter/Leave) Events */
    attachOnMouseHover(grid) {
        grid.onMouseEnter.subscribe((e) => {
            const cell = grid.getCellFromEvent(e);
            if (cell && cell.row >= 0) {
                grid.setSelectedRows([cell.row]);
                e.preventDefault();
            }
        });
        grid.onMouseLeave.subscribe((e) => {
            grid.setSelectedRows([]);
            e.preventDefault();
        });
    }
    /* OnCellChange Event */
    attachOnCellChange(grid, gridOptions, dataView) {
        // subscribe to this Slickgrid event of onCellChange
        grid.onCellChange.subscribe((e, args) => {
            if (!e || !args || !args.grid || args.cell === undefined || !args.grid.getColumns || !args.grid.getDataItem) {
                return;
            }
            const column = args.grid.getColumns()[args.cell];
            // if the column definition has a onCellChange property (a callback function), then run it
            if (typeof column.onCellChange === 'function') {
                // add to the output gridOptions & dataView since we'll need them inside the AJAX column.onCellChange
                const returnedArgs = {
                    dataView,
                    gridDefinition: gridOptions,
                    grid,
                    columnDef: column,
                    dataContext: args.grid.getDataItem(args.row)
                };
                // finally call up the Slick.column.onCellChanges.... function
                column.onCellChange(returnedArgs);
                // e.stopImmediatePropagation();
            }
        });
    }
    /* OnClick Event */
    attachOnClick(grid, gridOptions, dataView) {
        grid.onClick.subscribe((e, args) => {
            if (!e || !args || !args.grid || args.cell === undefined || !args.grid.getColumns || !args.grid.getDataItem) {
                return;
            }
            const column = args.grid.getColumns()[args.cell];
            // if the column definition has a onCellClick property (a callback function), then run it
            if (typeof column.onCellClick === 'function') {
                // add to the output gridOptions & dataView since we'll need them inside the AJAX column.onClick
                const returnedArgs = {
                    dataView,
                    gridDefinition: gridOptions,
                    grid,
                    columnDef: column,
                    dataContext: args.grid.getDataItem(args.row)
                };
                // finally call up the Slick.column.onCellClick.... function
                column.onCellClick(returnedArgs);
                e.stopImmediatePropagation();
            }
            // stop the click event bubbling
            // NOTE: We don't want to stop bubbling when doing an input edit, if we do the autoEdit which has intent of doing singleClick edit will become doubleClick edit
            if (grid.getOptions && !grid.getOptions().autoEdit) {
                // e.stopImmediatePropagation();
            }
        });
    }
}
//# sourceMappingURL=gridEvent.service.js.map