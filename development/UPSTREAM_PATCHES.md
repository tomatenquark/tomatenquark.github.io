# Applying patches from upstream

`Tomatenquark` does not incorporate any custom code (yet). This is by design. The project is looking to deliver a stable, constantly updated version of the game before making any adaptions to its code. This is mainly done by providing `CI/CD`. 

In order to keep this system running it is important to be able to roll in changes from `upstream` (sauerbraten SVN).

Here is how this can be done:

- use a `git svn` clone of SVN and regularly update it using `git svn rebase`
- use `git format-patch -NUMBER -o ../patches` to store the latest `NUMBER` of commits as patches
- add all patches to `sauerbraten_code` using `git am < ../patches/0000.patch`
- check patches if they apply either to `code` or `media` and apply them to one of the repositories

Using this approach ensures that `sauerbraten_code` will have the exact same number of commits as SVN, allowing for bookkeeping. As long as the directory structure of `code` or `media` is not changed, this will continue to work sanely. In case code is modified in some of these repositories (directory structure), we would need a new routine for applying patches from upstream.
