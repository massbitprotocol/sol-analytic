import Vue from 'vue';
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import {
  required,
  min_value as minValue,
  email,
  confirmed,
  min,
  image,
  size,
  max,
  double,
  dimensions,
  numeric,
} from 'vee-validate/dist/rules';
import en from 'vee-validate/dist/locale/en.json';
import { isNil } from 'lodash/lang';

const validateImage = function (file, width, height, type) {
  const URL = window.URL || window.webkitURL;
  return new Promise(function (resolve) {
    const image = new Image();
    image.onerror = function () {
      return resolve(false);
    };
    image.onload = function () {
      if (type === 'min') {
        return resolve(image.width >= width && image.height >= height);
      } else return resolve(image.width === width && image.height === height);
    };
    image.src = URL.createObjectURL(file);
  });
};

extend('required', required);
extend('numeric', numeric);
extend('max', max);
extend('min', min);
extend('min_value', minValue);
extend('double', double);
extend('email', email);
extend('image', image);
extend('size', size);
extend('confirmed', confirmed);
extend('dimensions', dimensions);
extend('gt', {
  validate: (value, { min }) => {
    if (isNil(value) || value === '') {
      return false;
    }
    if (Array.isArray(value)) {
      return value.length > 0 && value.every((val) => this.validate(val, { min }));
    }

    return Number(value) > min;
  },
  params: [
    {
      name: 'min',
      cast(value) {
        return Number(value);
      },
    },
  ],
  message: 'The {_field_} field must be greater than {min}',
});
extend('min_dimensions', {
  validate: (files, { width, height }) => {
    const list = [];
    files = Array.isArray(files) ? files : [files];
    for (let i = 0; i < files.length; i++) {
      // if file is not an image, reject.
      if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
        return Promise.resolve(false);
      }
      list.push(files[i]);
    }

    return Promise.all(list.map((file) => validateImage(file, width, height, 'min'))).then((values) =>
      values.every((v) => v),
    );
  },
  params: [
    {
      name: 'width',
      cast(value) {
        return Number(value);
      },
    },
    {
      name: 'height',
      cast(value) {
        return Number(value);
      },
    },
  ],
  message: 'The {_field_} field must be greater than {width} pixels by {height} pixels',
});

localize('en', en);

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
