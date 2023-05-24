#!/bin/bash

# Obtener el PID del proceso que está utilizando el puerto 3000
PID=$(lsof -t -i :3000)

# Verificar si se encontró un PID
if [ -z "$PID" ]; then
  echo "No se encontró ningún proceso utilizando el puerto 3000."
  exit 0
fi

# Matar el proceso utilizando el PID
kill -9 "$PID"

echo "El proceso con PID $PID ha sido terminado. El puerto 3000 está libre ahora."

