+++
title = 'Example Post with References'
date = '2025-07-06T00:44:14+01:00'
draft = true
series = 'tutorials'
+++

# Working with References

This is an example post showing how to use references in your blog posts.

## Individual References


- `{{< ref "cpu" "Another Article" >}}`

## Category Lists

- `{{< reflist "cpu" >}}`

## In Context

When you add references to your `data/references.yaml` file, you can reference them inline within your blog posts for a seamless reading experience.

First, add your references to the data file:
```yaml
sec:
  "Your Security Article": "https://example.com"
cpu:
  "Your CPU Article": "https://example.com"
```

Then reference them in posts like: {{< ref "sec" "Your Security Article" >}} 