+++
date = '2025-07-06T00:44:14+01:00'
draft = true
series = 'tutorials'
title = "Test Post"
comments = { id = "3ltze7rfsrk2q" }
+++

# Working with References

This is an example post showing how to use references in your blog posts.

## Individual References

You can reference individual articles using the `ref` shortcode with aliases for cleaner text:

- {{< ref "cpu" "Data-Oriented Design Now And In The Future" "Data-Oriented Design" >}}
- {{< ref "prog" "How Non-Member Functions Improve Encapsulation" "Non-Member Functions" >}}

## In Context

When you add references to your `data/references.yaml` file, you can reference them inline within your blog posts for a seamless reading experience.

First, add your references to the data file:

```yaml
cpu:
  "Data-Oriented Design Now And In The Future": "https://gamesfromwithin.com/data-oriented-design-now-and-in-the-future"
  "Managing Data Relationships": "https://gamesfromwithin.com/managing-data-relationships"
prog:
  "How Non-Member Functions Improve Encapsulation": "https://www.drdobbs.com/cpp/how-non-member-functions-improve-encapsu/184401197"
  "Vibe Coding Casino": "https://evrim.zone/blog/opinion/vibes_casino"
```

Then reference them in posts with custom display text: {{< ref "cpu" "Data-Oriented Design Now And In The Future" "Data-Oriented Design" >}}

The reference system automatically provides links to archive.org, Hacker News discussions, and Reddit threads for each reference.
