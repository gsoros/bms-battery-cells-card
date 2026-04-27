export default {
    editor: {
        title: "Titre de la carte",
        main_sensors: "Capteur principaux",
        soc: "SoC (Etat de charge %)",
        power: "Puissance (Watt)",
        voltage: "Tension (Volt)",
        current: "Courant (Ampere)",
        drift: "Difference de tension (Delta mV)",
        temp: "Battery Température (°C)",
        display_options: "Affichage et options",
        min_voltage: "Min Tension (V)",
        max_voltage: "Max Tension (V)",
        show_header_values: "Afficher les valeurs au dessus des icones (Header)",
        hide_bars: "Masquer le graphique (Compact Mode)",
        horizontal_layout: "Horizontal Layout (Vue liste)",
        show_as_table: "Afficher en tableau (Pas de graphique",
        thick_borders: "Bordures plus épaissses (2px)",
        enable_animations: "Activer animations",
        show_cell_voltages: "Afficher tension cellules",
        show_min_max: "Surligner Min/Max cellules",
        show_average: "Afficher tension moyenne",
        calc_drift: "Calculer la difference de tension",
        cells: "Cellules",
        add_cell: "Ajouter une cellule",
        cell_name: "Nom",
        cell_entity: "Entité tension",
        cell_balance_entity: "Entité balance (opt.)", // NEU
        
        // Detailed View Options
        show_detailed_view: "Enable Detailed View",
        show_cell_list: "Show Cell Voltage List", 
        show_standard_in_detail: "Show Standard View (Bars) at bottom", 
        show_charts: "Show Charts",
        detailed_sensors: "Detailed View Sensors (optional)",
        soh: "SoH (Health %)",
        capacity: "Capacity (Ah)",
        cycle_capacity: "Cycle Capacity (Ah)",
        cycles: "Cycle Count",
        temp_mos: "MOS Temp (°C)",
        
        stat_charge: "Charge (Switch/Input Boolean/Select)",
        stat_discharge: "Discharge (Switch/Input Boolean/Select)",
        stat_balance: "Balancing Global (Switch/Input Boolean/Select)",
        
        // Custom State Values
        val_on: "Value for ON (e.g. 'ON' or 'True')",
        val_off: "Value for OFF (e.g. 'OFF' or 'False')"
    },
    card: {
        power: "Power",
        soc: "SoC",
        temp: "Temp",
        drift: "Drift",
        avg_cell: "Ø Cell",
        
        // Detailed View Labels
        batt_voltage: "Battery Voltage",
        delta_cell_vol: "Delta Cell Voltage",
        max_cell: "Max Cell",
        charge: "Charge",
        discharge: "Discharge",
        balance: "Balance",
        on: "ON",
        off: "OFF",
        soh: "SoH",
        batt_capacity: "Battery Capacity",
        cycle_capacity: "Cycle Capacity",
        cycle_count: "Cycle Count",
        mos_temp: "MOS Temp.",
        min_temp: "Min Temp.",
        max_temp: "Max Temp.",
        remain_capacity: "Remain Capacity"
    }
};
