#!/bin/bash

echo "{\"tooltip\": \"Power Off | Uptime: $(uptime -p | sed 's/up //')\"}"
