using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TestVersta24.Server.Migrations
{
    /// <inheritdoc />
    public partial class change_date : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DateTime",
                table: "Orders",
                newName: "Date");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Date",
                table: "Orders",
                newName: "DateTime");
        }
    }
}
