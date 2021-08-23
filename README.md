# POC javascript action

## Inputs

### `container_registry`

**Obrigatório** Endereço do Docker Container Registry.

### `chart_source_location`

**Opcional** Diretório do Helm desse repositório. Padrão `"infrastructure/helm"`.

### `environment`

**Obrigatório** Ambiente alvo.

Valores aceitos:

- `stg` para stage;
- `sdx` para sandbox;
- `prd` para produção.

## Outputs

### `tag`

Exemplo: "v0.0.0-stg"

### `version`

Exemplo: "0.0.0-stg"

### `short_sha`

Exemplo: "1234bcd3"

### `project_slug`

Exemplo: "project_uri"

### `container_registry`

Exemplo: "v0.0.0-stg"

### `container_image`

Exemplo: "registry.hub.docker.com/project_uri-stg/0.0.0-stg"

### `chart_source_location`

Exemplo: "infrastructure/helm"

### `chart_target_location`

Exemplo: "charts/project_uri-stg/v0.0.0-stg"

## Exemplo de uso

```yaml
use: henrique502/action-docker-env-config@v1.1
id: configs
input:
  container_registry: registry.hub.docker.com
  chart_source_location: infrastructure/helm
  environment: stg
```
