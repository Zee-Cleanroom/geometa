-- Ensure hints image_url values are unique
ALTER TABLE hints
ADD CONSTRAINT hints_image_url_unique UNIQUE (image_url);

