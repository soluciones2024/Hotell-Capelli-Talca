<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hotel Management System</title>
    <!-- Carga local del motor de iconos -->
    <script src="lucide.js"></script>
    <style>
        /* ESTILOS INTERNOS COMPLETOS (REEMPLAZAN A TAILWIND OFFLINE) */
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: system-ui, -apple-system, sans-serif; }
        body { background-color: #f3f4f6; color: #1f2937; display: flex; height: 100vh; overflow: hidden; }
        .flex { display: flex; } .flex-1 { flex: 1 1 0%; } .flex-col { flex-direction: column; }
        aside { wwidth: 260px; background-color: #0f172a; color: #cbd5e1; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.3); }
        .brand { padding: 20px; display: flex; items-center; gap: 12px; border-bottom: 1px solid #1e293b; background-color: #020617; font-size: 1.25rem; font-weight: bold; color: white; }
        nav { padding: 16px; display: flex; flex-direction: column; gap: 4px; }
        .sidebar-link { width: 100%; display: flex; items-center; gap: 12px; padding: 12px 16px; border: 0; border-radius: 8px; background: transparent; color: #cbd5e1; text-align: left; cursor: pointer; transition: 0.2s; font-size: 0.95rem; }
        .sidebar-link:hover { background-color: #1e293b; color: white; }
        .sidebar-link.active { background-color: #2563eb !important; color: white !important; font-weight: 600; }
        main { flex: 1; display: flex; flex-direction: column; overflow-y: auto; }
        header { background-color: white; padding: 16px 32px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e5e7eb; box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); }
        h1 { font-size: 1.5rem; font-weight: 700; color: #111827; }
        .container { padding: 32px; max-width: 1280px; width: 100%; margin: 0 auto; }
        .grid-4 { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; }
        .card { background: white; padding: 24px; border-radius: 12px; border: 1px solid #edf2f7; box-shadow: 0 1px 3px rgba(0,0,0,0.05); display: flex; justify-content: space-between; align-items: center; }
        .card-title { font-size: 0.875rem; color: #6b7280; font-weight: 500; }
        .card-value { font-size: 1.875rem; font-weight: 700; margin-top: 4px; color: #111827; }
        .bg-white { background-color: white; padding: 24px; border-radius: 12px; border: 1px solid #e5e7eb; margin-bottom: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
        .form-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; align-items: end; }
        label { display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; color: #4b5563; margin-bottom: 6px; }
        input, select { width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 8px; background-color: #f9fafb; outline: none; font-size: 0.9rem; }
        input:focus, select:focus { border-color: #2563eb; background-color: white; box-shadow: 0 0 0 3px rgba(37,99,235,0.15); }
        button[type="submit"], .btn { background-color: #2563eb; color: white; font-weight: 500; padding: 10px 20px; border: 0; border-radius: 8px; cursor: pointer; transition: 0.2s; font-size: 0.9rem; }
        button[type="submit"]:hover, .btn:hover { background-color: #1d4ed8; }
        table { width: 100%; border-collapse: collapse; text-align: left; margin-top: 12px; }
        th { background-color: #f9fafb; padding: 16px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; color: #374151; border-bottom: 1px solid #e5e7eb; }
        td { padding: 16px; border-bottom: 1px solid #f3f4f6; font-size: 0.875rem; }
        tr:hover td { background-color: #f9fafb; }
        .badge { padding: 4px 10px; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; }
        .badge-green { background-color: #dcfce7; color: #15803d; }
        .badge-red { background-color: #fee2e2; color: #b91c1c; }
        .badge-amber { background-color: #fef3c7; color: #92400e; }
        .badge-blue { background-color: #dbeafe; color: #1e40af; }
        .hidden { display: none !important; }
    </style>
</head>
