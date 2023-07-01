using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Mason_Portfolio.Data;
using MySqlConnector;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<Mason_PortfolioContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Mason_PortfolioContext") ?? throw new InvalidOperationException("Connection string 'Mason_PortfolioContext' not found.")));

// Add services to the container.

builder.Services.AddControllersWithViews();

builder.Services.AddSpaStaticFiles(configuration =>
{
    configuration.RootPath = "ClientApp/build";
});

builder.Services.AddTransient<MySqlConnection>(_ =>
    new MySqlConnection(builder.Configuration.GetConnectionString("Mason_PortfolioContext")));

builder.Services.AddSwaggerDocument(configure => configure.Title = "Portfolio API");

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseOpenApi();
app.UseSwaggerUi3();

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;


app.Run();
