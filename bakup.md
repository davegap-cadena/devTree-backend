# Exportar volumen de postgres
docker run --rm -v volumen-postgres:/data -v ${PWD}:/backup alpine tar czf /backup/postgres-backup.tar.gz -C /data .

# Exportar volumen de pgadmin (opcional)
docker run --rm -v volumen-pgadmin:/data -v ${PWD}:/backup alpine tar czf /backup/pgadmin-backup.tar.gz -C /data .
```

Esto crea archivos `.tar.gz` en tu carpeta actual.

### Llevar al PC destino:
Copia estos archivos junto con tu `docker-compose.yml`:
```
📁 carpeta-proyecto/
  ├── docker-compose.yml
  ├── postgres-backup.tar.gz
  └── pgadmin-backup.tar.gz


  #computador destino 

  # 1. Crear los volúmenes
docker volume create volumen-postgres
docker volume create volumen-pgadmin

# 2. Restaurar los datos
docker run --rm -v volumen-postgres:/data -v ${PWD}:/backup alpine tar xzf /backup/postgres-backup.tar.gz -C /data

docker run --rm -v volumen-pgadmin:/data -v ${PWD}:/backup alpine tar xzf /backup/pgadmin-backup.tar.gz -C /data

# 3. Levantar los contenedores
docker-compose up -d


Comandos de exportar (en cualquier PC donde estés trabajando)
bash# Exportar datos actualizados
docker run --rm -v volumen-postgres:/data -v ${PWD}:/backup alpine tar czf /backup/postgres-backup.tar.gz -C /data .
Comandos de restaurar (en el PC destino)
bash# Detener contenedores primero
docker-compose down

# Restaurar volumen
docker run --rm -v volumen-postgres:/data -v ${PWD}:/backup alpine tar xzf /backup/postgres-backup.tar.gz -C /data

# Volver a levantar
docker-compose up -d
```

---

## Lo único que necesitas mover entre PCs
```
📁 carpeta-proyecto/
  ├── docker-compose.yml       ← configuración
  ├── postgres-backup.tar.gz   ← tus datos
  └── pgadmin-backup.tar.gz    ← config pgadmin (opcional)