import {useEffect, useState} from "react"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Link, navigate } from "gatsby"
import React from "react";

const Integrations = () => {

    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');

    const handleSourceChange = (event: SelectChangeEvent) => {
        setSource(event.target.value as string);
    };

    const handleDestinationChange = (event: SelectChangeEvent) => {
        setDestination(event.target.value as string);
    };

    const sourceArr = [
        {
            title: "MongoDB",
            path: "mongodb"
        },
        {
            title: "SQL Server",
            path: "sqlserver"
        },
        {
            title: "MariaDB",
            path: "mariadb"
        },
        {
            title: "Google Firestore",
            path: "firestore"
        },
        {
            title: "PostgreSQL",
            path: "postgres"
        },
        {
            title: "MySQL",
            path: "mysql"
        },
        {
            title: "Amazon Aurora for Postgres",
            path: "amazon-aurora-postgres"
        },
        {
            title: "Amazon Aurora for MySQL",
            path: "amazon-aurora-mysql"
        },
    ]

    const destinationArr = [
        {
            title: "Amazon Redshift",
            path: "redshift"
        }
    ]

    return (
        <>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Source</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={source}
                        label="Source"
                        onChange={handleSourceChange}
                    >
                        {sourceArr.map(src => (
                            <MenuItem value={src.path}>{src.title}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Destination</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={destination}
                        label="Destination"
                        onChange={handleDestinationChange}
                    >
                        {destinationArr.map(src => (
                            <MenuItem value={src.path}>{src.title}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <button onClick={() => navigate(`/connection/${source}/${destination}`, {replace: true})}>Details</button>
        </>

    )
}

export default Integrations