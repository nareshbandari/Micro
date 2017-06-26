package com.slokam.an;

public class ProfileOtherInfo {
	
	private  Integer pid;
	private String education;
	private String income;
	private String occupation;
	private String fmembers;
	private String status;
	
	
	@Override
	public String toString() {
		return "ProfileOtherInfo [pid=" + pid + ", education=" + education + ", income=" + income + ", occupation="
				+ occupation + ", fmembers=" + fmembers + ", status=" + status + "]";
	}
	public Integer getPid() {
		return pid;
	}
	public void setPid(Integer pid) {
		this.pid = pid;
	}
	public String getEducation() {
		return education;
	}
	public void setEducation(String education) {
		this.education = education;
	}
	public String getIncome() {
		return income;
	}
	public void setIncome(String income) {
		this.income = income;
	}
	public String getOccupation() {
		return occupation;
	}
	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}
	public String getFmembers() {
		return fmembers;
	}
	public void setFmembers(String fmembers) {
		this.fmembers = fmembers;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
}
