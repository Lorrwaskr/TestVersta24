# Тестовое задание для Versta24

## Запуск проекта

1. <a href="https://dotnet.microsoft.com/en-us/download/dotnet/8.0">Установить .Net Core SDK 8</a>
2. <a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads">Установить PostgreSQL</a>
3. Склонировать проект, используя команду:
```powershell
git clone https://github.com/Lorrwaskr/TestVersta24
```

### Для запуска сервера:
- настроить подключение к базе данных в файле конфигурации проекта (TestVersta24\TestVersta24.Server\appsettings.Development.json)
- открыть терминал в папке (TestVersta24\TestVersta24.Server) 
- ввести команды: 
```powershell
dotnet build
dotnet tool install --global dotnet-ef
dotnet ef database update
dotnet run --urls "https://localhost:7079"
```
- BackEnd должен быть доступен по адресу: https://localhost:7079/swagger

### Для запуска клиента:
- открыть терминал в папке (TestVersta24\testversta24.client)

- ввести команды: 

```powershell
npm install
npm run dev
```
- FrontEnd должен быть доступен по адресу: https://localhost:5173/