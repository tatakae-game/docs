# San Playground API usage
This API lets you directly execute SAN code from HTTP requests.

The operating system it's running on is Ubuntu 20.04.

## POST `/run`
Compile and run the passed code.

### Input data structure
```ts
{
    files: {
        /** name: content */
        [name: string]: string,
    },

    /** must be present in files */
    entrypoint?: string = "main.sn",

    args?: string[],

    stdin?: string,
}
```

### Output data structure
Those informations are from the compiler and from the builded code execution.

```ts
{
    success: boolean,
    error?: string | {
        killed: boolean,
        code: number,
        signal: string | null,
    },
    stdout?: string,
    stderr?: string,
}
```

## POST `/build`
Just build the passed code.

### Input data structure
```ts
{
    files: {
        /** name: content */
        [name: string]: string,
    },

    /** must be present in files */
    entrypoint?: string = "main.sn",
}
```

### Output data structure
Those informations are only from the compiler and not from the builded code execution (which is not launched in this route).

```ts
{
    success: boolean,
    error?: string | {
        killed: boolean,
        code: number,
        signal: string | null,
    },
    stdout?: string,
    stderr?: string,
}
```
