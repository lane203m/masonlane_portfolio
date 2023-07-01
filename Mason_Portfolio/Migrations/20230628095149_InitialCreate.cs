using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Mason_Portfolio.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AboutMeData",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    AboutMeText = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AboutMeData", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ContactData",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Province = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Country = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContactNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PersonalEmail = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContactData", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PortfolioData",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    AboutMeDataId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    ContactDataId = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PortfolioData", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PortfolioData_AboutMeData_AboutMeDataId",
                        column: x => x.AboutMeDataId,
                        principalTable: "AboutMeData",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_PortfolioData_ContactData_ContactDataId",
                        column: x => x.ContactDataId,
                        principalTable: "ContactData",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "PortfolioItemData",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ItemName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ItemDescription = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ItemImage = table.Column<byte[]>(type: "varbinary(max)", nullable: false),
                    PortfolioDataId = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PortfolioItemData", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PortfolioItemData_PortfolioData_PortfolioDataId",
                        column: x => x.PortfolioDataId,
                        principalTable: "PortfolioData",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "SocialMediaLinkData",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    RedirectLink = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FontAwesomeIconFamily = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FontAwesomeIconName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContactDataId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    PortfolioItemDataId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SocialMediaLinkData", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SocialMediaLinkData_ContactData_ContactDataId",
                        column: x => x.ContactDataId,
                        principalTable: "ContactData",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_SocialMediaLinkData_PortfolioItemData_PortfolioItemDataId",
                        column: x => x.PortfolioItemDataId,
                        principalTable: "PortfolioItemData",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_PortfolioData_AboutMeDataId",
                table: "PortfolioData",
                column: "AboutMeDataId");

            migrationBuilder.CreateIndex(
                name: "IX_PortfolioData_ContactDataId",
                table: "PortfolioData",
                column: "ContactDataId");

            migrationBuilder.CreateIndex(
                name: "IX_PortfolioItemData_PortfolioDataId",
                table: "PortfolioItemData",
                column: "PortfolioDataId");

            migrationBuilder.CreateIndex(
                name: "IX_SocialMediaLinkData_ContactDataId",
                table: "SocialMediaLinkData",
                column: "ContactDataId");

            migrationBuilder.CreateIndex(
                name: "IX_SocialMediaLinkData_PortfolioItemDataId",
                table: "SocialMediaLinkData",
                column: "PortfolioItemDataId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SocialMediaLinkData");

            migrationBuilder.DropTable(
                name: "PortfolioItemData");

            migrationBuilder.DropTable(
                name: "PortfolioData");

            migrationBuilder.DropTable(
                name: "AboutMeData");

            migrationBuilder.DropTable(
                name: "ContactData");
        }
    }
}
