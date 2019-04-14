@echo off
title Build for Verivox test project

SET pathToFront="d:\Documents\Andersen\Verivox\Angular\verivox-tariff-list\"

@echo Front build for Verivox test project started.
@echo Path to repository is %pathToFront%
@echo.

cd /d %pathToFront%

call npm install

call ng serve
@echo.

pause