This is a simple command line util to ABI-encode a method given a set of parameters and method name.

This was made to accompany [`safe-global-smartcard`](https://github.com/alex-miller-0/safe-global-smartcard) and is needed because ABI encoding in Go is so painful.

All inputs must be a JSON-serialized `DecodedData` object from `safe-global-smartcard`.

To build:

```sh
make build
```

This will produce an executable binary: `./encoder`