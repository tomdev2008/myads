package com.ku6ads.dao.iface.advert;

import java.util.List;

import com.ku6ads.dao.base.BaseDao;
import com.ku6ads.dao.entity.advert.PostemBartem;
import com.ku6ads.dao.entity.advert.Postemplate;

/**
 * 
 * @author liujunshi
 *
 */
public interface PostemplateDao extends BaseDao {
	
	/**
	 * 得到可用的广告位模板
	 * @return
	 */
	public List<Postemplate> getEnablePostemplate();
	
	/**
	 * 获得相关广告位模板下的光条模板
	 * @param postemBartem
	 * @return
	 */
	public List<PostemBartem> getBartemByPostemId(PostemBartem postemBartem);
	
	
	/**
	 * 广告位模板对应的广告条模板总数
	 * @param postemBartem
	 * @return
	 */
	public Integer getBartemCountByPostemId(PostemBartem postemBartem);
	
	
	/**
	 * 添加广告位广告条关系
	 * @param postemBartem
	 * @return
	 */
	public void insertPostemBartem(PostemBartem postemBartem);
	
	/**
	 * 删除广告位广告条关系
	 * @param postemBartem
	 * @return
	 */
	public void deletePostemBartem(int postemBartemId);
	
	/**
	 * 删除广告位广告条关系根据位模板ID
	 * @param postemBartem
	 * @return
	 */
	public void deletePostemBartemByPId(int postemId);
	
	
	/**
	 * 根据两个Id查询关系是否存在
	 * @param postemBartem
	 */
	public Object selectByTwoId(PostemBartem postemBartem);
}
