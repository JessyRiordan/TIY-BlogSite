##Adding Images to Markdown

So you want to add images to Markdown? There are two ways to accomplish this task. The first is to use an image that is already has a url. The second is to use an image from your computer.

###From Internet - with url

The basic format for inserting an image into Markdown:

```
![Alt text](url)
```

For example, I want to put the following image into my markdown file: [http://archive.garron.us/img/2012/11th_doctocat.png](http://archive.garron.us/img/2012/11th_doctocat.png).

This would be the format in which I insert the image:

```
![Dr. Who Octocat](http://archive.garron.us/img/2012/11th_doctocat.png)
```

This is what is looks like inserted into my Markdown file:

![Dr. Who Octocat](http://archive.garron.us/img/2012/11th_doctocat.png)


###From Computer

The basic format for inserting an image into Markdown:

```
![Alt text](url)
```

This is the same as above!

For example, I want to put the following image into my markdown file: [http://archive.garron.us/img/2012/11th_doctocat.png](http://archive.garron.us/img/2012/11th_doctocat.png).

I would begin by saving the image to my computer and moving it into my repository. Keep track of the path of the file - this will be important in the next step.

This would be the format in which I insert the image:

```
![Dr. Who Octocat](../img/journal-week-4/octocat_dr_who.png)
```

This is what is looks like inserted into my Markdown file:

![Dr. Who Octocat](../img/journal-week-4/octocat_dr_who.png)
