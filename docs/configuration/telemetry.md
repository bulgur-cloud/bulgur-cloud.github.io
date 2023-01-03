---
title: Telemetry
sidebar_position: 20
---

Bulgur Cloud has optional support for
[OpenTelemetry](https://opentelemetry.io/). Right now the telemetry is
backend-only. You can put the telemetry into an OpenTelemetry compatible service
such as [HoneyComb](https://www.honeycomb.io/) or
[Jaeger](https://www.jaegertracing.io/) to inspect the latency, error rate, and
more.

The configuration for this is done through environment variables. You set
`OTEL_EXPORTER_OTLP_ENDPOINT` and `OTEL_SERVICE_NAME` to set the endpoint to
send to, and what this service should be named. You **must** set
`OTEL_SERVICE_NAME`, if it is not set then telemetry will not activate.

You'll probably need to set some headers to authenticate with the OpenTelemetry
service, which you can do by setting them as a header. You'll need to prefix the
header name with `OTEL_META_`, uppercase the header name, and replace dashes
with underscores.

## Example for HoneyComb.io

```sh
export OTEL_META_X_HONEYCOMB_TEAM="your api key here"
export OTEL_META_X_HONEYCOMB_DATASET="pick a dataset name"
export OTEL_SERVICE_NAME="pick a service name"
export OTEL_EXPORTER_OTLP_ENDPOINT="https://api.honeycomb.io/"
```

## Troubleshooting

### Data is not getting exported with the Docker container

There is an [outstanding issue](https://github.com/bulgur-cloud/bulgur-cloud/issues/135) with the docker container when trying to use telemetry.
Because the Bulgur Cloud container is very minimal, it doesn't include SSL certificates. This means the exporter can't verify the
certificate of the endpoint you are exporting to, which causes it to fail. If this is happening to you, you might see an error like "error trying to connect: invalid certificate: UnknownIssuer"
although the error can be hard to see between all the other log output.

You can work around this issue by mounting the SSL certificates from the host system to the container. For example, on ArchLinux you can mount `/etc/ssl` and `/etc/ca-certificates` to the container.
With a `docker-compose.yml`:

```yml
 bulgur-cloud:
    image: seriousbug/bulgur-cloud
    volumes:
    ...
        # These 2 are needed to give the container access to the SSL certificates.
        # The certificates may be located somewhere else on your system.
      - /etc/ssl:/etc/ssl:ro
      - /etc/ca-certificates:/etc/ca-certificates:ro
    ...
```
