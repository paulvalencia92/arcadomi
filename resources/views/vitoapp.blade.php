<!DOCTYPE html>
<html lang="es" dir="ltr" mode="light">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>ArcaDomi</title>
    <link rel="icon" href="{{ asset('favicon.ico') }}">

    <link rel="stylesheet" href="{{ asset('css/app.css') }}"/>
</head>
<body>
<noscript>
    <strong>
        Disculpa, pero debes tener habilitado tu JavaScript para poder usar nuestra aplicación
    </strong>
</noscript>
<div id="app">
</div>

<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
