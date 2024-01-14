# Тестовое задание для Versta24

## Запуск проекта

1. <a href="https://dotnet.microsoft.com/en-us/download/dotnet/8.0">Установить .Net Core SDK 8</a>
2. <a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads">Установить PostgreSQL</a>
3. Склонировать проект, используя команду:
```powershell
git clone 
```

### Для запуска сервера открыть терминал в корневой папке (Versta24/) 

- ввести команды: 
```powershell
dotnet build
dotnet run --project 
```
- BackEnd должен быть доступен по адресу: https://localhost:7219/

### Для запуска клиента открыть терминал в директории ./src/client/versta24.client

- ввести команды: 
```powershell
npm install
npm run dev
```
- FrontEnd должен быть доступен по адресу: https://localhost:5173/