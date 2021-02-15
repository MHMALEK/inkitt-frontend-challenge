import React from 'react';
import ContentLoader from 'react-content-loader';

const SampleCommentPlaceHolderLoading = () => (
  <div className='px-3 pt-3 pb-3'>
    <div className='text-xs border-2 border-gray-200 shadow-lg bg-white rounded-lg overflow-hidden'>
      <ContentLoader
        speed={2}
        width='100%'
        height={160}
        viewBox='0 0 400 160'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
        style={{ marginTop: 40 }}
      >
        <rect
          x='48'
          y='8'
          rx='3'
          ry='3'
          width='88'
          height='6'
        />
        <rect
          x='48'
          y='26'
          rx='3'
          ry='3'
          width='52'
          height='6'
        />
        <rect
          x='0'
          y='56'
          rx='3'
          ry='3'
          width='410'
          height='6'
        />
        <rect
          x='0'
          y='72'
          rx='3'
          ry='3'
          width='380'
          height='6'
        />
        <rect
          x='0'
          y='88'
          rx='3'
          ry='3'
          width='178'
          height='6'
        />
        <rect
          x='0'
          y='120'
          rx='3'
          ry='3'
          width='178'
          height='6'
        />
        <circle cx='20' cy='20' r='20' />
      </ContentLoader>
    </div>
  </div>
);

export default SampleCommentPlaceHolderLoading;
