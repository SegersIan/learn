publish:
	git stash
	git checkout gh-pages
        yarn docs:build
	git add .
	git commit -am "build"
	git push -f
	git checkout master
	git stash pop
