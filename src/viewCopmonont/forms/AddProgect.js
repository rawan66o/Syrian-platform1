import './Form.css';
import { useState } from 'react';
import { DatePicker } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';

function AddProject() {
  // ====== STATES SECTION ========
  const [formData, setFormData] = useState({
    title: '',
    volunteers: '',
    startDate: null ,
    shortDescription: '',
    fullDescription: ''
  });

  const [coverImage, setCoverImage] = useState(null);
  const [organizationImage, setOrganizationImage] = useState(null);
  const [projectImages, setProjectImages] = useState([]);
  const [coverImagePreview, setCoverImagePreview] = useState(null);
  const [organizationImagePreview, setOrganizationImagePreview] = useState(null);

  // ======= FUNCTIONS ========
  
  const handleFieldChange = (fieldName) => (e) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };
  

  // دالة رفع صورة واحدة
  const handleSingleImageUpload = (type) => (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('حجم الصورة يجب أن يكون أقل من 5MB');
        return;
      }

      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
      if (!validTypes.includes(file.type)) {
        alert('صيغة الصورة غير مدعومة. استخدم JPG, PNG, GIF');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'cover') {
          setCoverImage(file);
          setCoverImagePreview(reader.result);
        } else if (type === 'organization') {
          setOrganizationImage(file);
          setOrganizationImagePreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // دالة رفع متعدد الصور للمشروع
  const handleProjectImagesUpload = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(file => {
      const isValidType = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'].includes(file.type);
      const isValidSize = file.size <= 5 * 1024 * 1024;
      return isValidType && isValidSize;
    });

    validFiles.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProjectImages(prev => [...prev, {
          id: Date.now() + Math.random(),
          url: reader.result,
          file: file
        }]);
      };
      reader.readAsDataURL(file);
    });
  };

  // دالة حذف صورة من معرض المشروع
  const removeProjectImage = (id) => {
    setProjectImages(prev => prev.filter(img => img.id !== id));
  };

  // دالة النشر
  const handlePublish = async () => {
    const formDataToSend = new FormData();

    if (coverImage) formDataToSend.append('coverImage', coverImage);
    if (organizationImage) formDataToSend.append('organizationImage', organizationImage);
    
    projectImages.forEach((img, index) => {
      formDataToSend.append(`projectImage${index}`, img.file);
    });

    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key]);
    });

    console.log('بيانات النموذج:', formData);
    alert('تم تحضير البيانات للنشر!');
  };

  return (
    <div style={{padding:'10px'}}>
      <div className='app-a'>
        <div className='request'>
          <h6 style={{fontSize:'24px', lineHeight:'100%', color:'#232323'}}>
            اضافة مشروع تطوعي جديد :
          </h6>
          
          <div className='form-request'>
            {/* عنوان المشروع */}
            <label>عنوان المشروع</label>
            <div className='input-texthelp'> من فضلك يجب أن يكون الاسم معبرا ولا يتجاوز 30 حرف .</div>
            <input 
              placeholder='دورة لغة انجليزية' 
              value={formData.title}
              onChange={handleFieldChange('title')}
            />
            
            {/* عدد المتطوعين */}
            <label>عدد المتطوعين المطلوبين :</label>
            <input 
              placeholder='24'
              value={formData.volunteers}
              onChange={handleFieldChange('volunteers')}
            />
            
            {/* موعد البدء */}
            <label>تحديد موعد بدأ المشروع</label>
            <div style={{ position: 'relative', width: '100%' }}>
              <DatePicker 
                selected={formData.startDate}
                onChange={(date) => setFormData(prev => ({ ...prev, startDate: date }))}
                dateFormat="dd/MM/yyyy"
                popperPlacement="bottom-end"
                customInput={
                  <div className='date-input-container'>
                    <input readOnly />
                    <div className='date-display'>
                      <div className='date-real-input'>
                        <img src='/icons/chalender/calendar.svg' alt='' />
                        <div className='date-text' style={{color: formData ? '#072127':'#708387' }}>
                          {formData.startDate ? 
                            format(formData.startDate,'dd/MM/yyyy'): '22/05/2025'
                          }
                        </div>
                      </div>
                      <img src='/images/icons/ChevronRight.png' alt='' />
                    </div>
                  </div>
                }
              />
            </div>
            
            {/* صورة الغلاف */}
            <label>صورة الغلاف</label>
            <div className='input-texthelp'> من فضلك يجب أن تكون الصورة معبرة ومناسبة مع الاسم .</div>
            <div className='input-image'>
              <div className='input-image-button'>
                <input
                  id="cover-image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleSingleImageUpload('cover')}
                  style={{ display: 'none' }}
                />
                <label htmlFor="cover-image-upload" style={{ marginRight: '20px' }}>
                  {coverImagePreview ? (
                    <img 
                      src={coverImagePreview} 
                      alt="معاينة صورة الغلاف"
                      style={{ 
                        width: '67px', 
                        height: '67px', 
                        borderRadius: '50%',
                        objectFit: 'cover' 
                      }}
                    />
                  ) : (
                    <img src='/images/icons/add.png' alt='إضافة صورة الغلاف'/>
                  )}
                </label>
              </div>
            </div>

            {/* معرض صور المشروع */}
            <label>الجهة المنفذة :</label>
            <div className='input-texthelp'>يمكن رفع عدة صور للمشروع</div>
            <div className='input-image'>
              <div className='input-image-button'>
                <input
                  id="project-images-upload"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleProjectImagesUpload}
                  style={{ display: 'none' }}
                />
                <label htmlFor="project-images-upload" style={{ marginBottom: '10px', marginRight: '20px' }}>
                  <img src='/images/icons/add.png' alt='إضافة صور'/>
                </label>
              </div>
              
              {/* معاينة الصور المرفوعة */}
              {projectImages.length > 0 && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                  gap: '10px',
                  width: '100%',
                  marginTop: '15px'
                }}>
                  {projectImages.map(img => (
                    <div key={img.id} style={{ position: 'relative' }}>
                      <img
                        src={img.url}
                        alt="معاينة"
                        style={{
                          width: '100px',
                          height: '100px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                          border: '1px solid #D9E4E5'
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => removeProjectImage(img.id)}
                        style={{
                          position: 'absolute',
                          top: '-8px',
                          right: '-8px',
                          background: '#ff4444',
                          color: 'white',
                          border: 'none',
                          borderRadius: '50%',
                          width: '24px',
                          height: '24px',
                          cursor: 'pointer',
                          fontSize: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* وصف قصير */}
            <label>وصف قصير للمشروع</label>
            <div className='input-texthelp'>يجب ان لا يتجاوز ال 50 حرف</div>
            <textarea 
              style={{height:'83px'}} 
              placeholder='وصف الدورة كامل ومعبر'
              value={formData.shortDescription}
              onChange={handleFieldChange('shortDescription')}
            />
            
            {/* الجهة المنفذة */}
            <label>الجهة المنفذة :</label>
            <div className='input-texthelp'>من فضلك يجب أن تكون الصورة معبرة ومناسبة مع الاسم .</div>
            <div className='input-image'>
              <div className='input-image-button'>
                <input
                  id="organization-image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleSingleImageUpload('organization')}
                  style={{ display: 'none' }}
                />
                <label htmlFor="organization-image-upload" style={{ marginBottom: '10px', marginRight: '20px' }}>
                  {organizationImagePreview ? (
                    <img 
                      src={organizationImagePreview} 
                      alt="معاينة صورة الجهة المنفذة"
                      style={{ 
                        width: '67px', 
                        height: '67px', 
                        borderRadius: '50%',
                        objectFit: 'cover' 
                      }}
                    />
                  ) : (
                    <img src='/images/icons/add.png' alt='إضافة صورة الجهة المنفذة'/>
                  )}
                </label>
              </div>
            </div>
            
            {/* وصف كامل */}
            <label>وصف المشروع الكامل</label>
            <textarea 
              placeholder='وصف الدورة كامل ومعبر'
              value={formData.fullDescription}
              onChange={handleFieldChange('fullDescription')}
            />
          </div>
        </div>
      </div>
      
      {/* أزرار التنقل */}
      <div className='button-request'>
        <button style={{ 
          width:'146px', 
          border: '1px solid #D9E4E5', 
          fontWeight:500,
          background:'#ffff', 
          color:'#072127'
        }}>
          السابق
        </button>
        <button 
          style={{ width:'396px'}}
          onClick={handlePublish}
        >
          نشر المشروع
        </button>
      </div>
    </div>
  );
}

export default AddProject;