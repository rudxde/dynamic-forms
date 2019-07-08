## Build
run ```ng build dynamic-forms```

## Import
install the content from the dist/dynamic-forms folder via NPM.

Make sure in your project the ```preserveSymlinks``` flag ist set.

```
{"projects": {
    "MyApp": {
      "architect": {
        "build": {
          "options": {
            "preserveSymlinks": true, // <-----
[...]
```
