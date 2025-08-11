import React, { useState } from 'react';
import './MyReviewDetail.css';
import MyReviewEdit from './MyReviewEditForm';

const MyReviewPage = ({ review, onClose }) => {
    const [animateClass, setAnimateClass] = useState('animate-slide-in');
    const [editOpen, setEditOpen] = useState(false);
    const [editAnimateClass, setEditAnimateClass] = useState('animate-slide-in');

    const handleClose = () => {
        setAnimateClass('animate-slide-out');
        setTimeout(() => {
            onClose();
        }, 300);
    };

    const handleEditClose = () => {
        setEditAnimateClass('animate-slide-out');
        setTimeout(() => {
            setEditOpen(false);
            setEditAnimateClass('animate-slide-in');
        }, 300);
    };

    const reviewData = {
        ...review,
        reviewDetails: [
            '상대가 친절했어요.',
            '상대가 약속을 잘 지켰어요.',
            '상품 상태가 좋아요.',
        ],
        reviewText: '아이도 좋아하고 상태도 매우 좋았습니다. 감사합니다!',
    };

    return (
        <>
            <aside className={`review-detail-sidebar ${animateClass}`}>
                <div className="sidebar-header">
                    <button className="back-button" onClick={handleClose}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>
                    <h1 className="sidebar-title">나의 리뷰 내역</h1>
                </div>

                <div className="review-detail-content">
                    <div className="product-summary">
                        <div className="product-image-container">
                            <img src={reviewData.image} alt={reviewData.productTitle} className="product-image" />
                        </div>
                        <div className="product-info">
                            <h2 className="product-title">{reviewData.title}</h2>
                            <p className="review-date">{reviewData.date}</p>
                            <div className="star-rating">
                                {[...Array(5)].map((_, index) => (
                                    <span key={index} className={`star ${index < reviewData.rating ? 'active' : ''}`}>★</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="review-details">
                        {reviewData.reviewDetails.map((item, idx) => (
                            <div key={idx} className="review-detail-item">
                                <span className="detail-text">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="review-text-container">
                        <div className="review-text-area">
                            <p className="review-text">{reviewData.reviewText}</p>
                            <div className="character-count">{reviewData.reviewText.length}/1000</div>
                        </div>
                    </div>

                    <div className="edit-button-container">
                        <button className="edit-button" onClick={() => setEditOpen(true)}>
                            수정 하기
                        </button>
                    </div>
                </div>
            </aside>

            {editOpen && (
                <MyReviewEdit onClose={handleEditClose} />
            )}
        </>
    );
};

export default MyReviewPage;
